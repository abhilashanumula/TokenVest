// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VestingToken {

    struct vestingSchedule{
        uint256 tokenAmount;
        uint duration;
    }

    struct employee{
        address _add;
        address _orgAdd;
        string _type;
        uint start;
        uint256 balance;
        vestingSchedule schedule;
    }

    struct organization{
        address add;
        ERC20 token;
        mapping (address => employee ) Employees;
        mapping (string => vestingSchedule) schedules;
    }

    mapping (address => organization) public Orgs;

    function displayOrgVestSchedule(address add_, string memory type_) public view returns (vestingSchedule memory) {
        return Orgs[add_].schedules[type_];
    }

    function regOrg(address  add_, address token_add) external {   
        Orgs[add_].add = add_;     
        Orgs[add_].token = ERC20(token_add);
    }

    function createVestingSchedule(address orgAdd, string memory type_, uint256 amount, uint dur) external  {
        require(orgAdd!=address(0),"Not Valid Address!");
        require(amount>0,"Amount should be greater than zero");
        require(dur!=0,"Duration can not be 0!");
        vestingSchedule memory schedule;
        schedule.tokenAmount = amount;
        schedule.duration = dur; //seconds
        Orgs[orgAdd].schedules[type_] = schedule;
    }

    function addEmployee(address orgAdd ,string memory type_, address employeeAddress) public {
        employee memory emp;
        emp._add = employeeAddress;
        emp._orgAdd = orgAdd;
        emp._type = type_;
        emp.balance = 0;
        emp.start = block.timestamp;
        emp.schedule = Orgs[orgAdd].schedules[type_];
        Orgs[orgAdd].Employees[employeeAddress] = emp;
    }

    function sendTokens(address orgAdd, address employeeAdd) public {
            require(Orgs[orgAdd].Employees[employeeAdd]._add == employeeAdd,"Employee not found in current Organization!!");
            string memory type_ = Orgs[orgAdd].Employees[employeeAdd]._type;
            require(block.timestamp >= Orgs[orgAdd].Employees[employeeAdd].start + Orgs[orgAdd].schedules[type_].duration, "Can't withdraw funds, Stil in Vesting Period");

    
            ERC20 token = Orgs[orgAdd].token;
            uint256 amount = Orgs[orgAdd].schedules[type_].tokenAmount;
            
            token.approve(address(this),amount);

            token.transferFrom(orgAdd, address(this), amount);
            Orgs[orgAdd].Employees[employeeAdd].balance = amount;
    }

    function requestTokens(address orgAdd) public {
            ERC20 token = Orgs[orgAdd].token;
            employee memory emp = Orgs[orgAdd].Employees[msg.sender];
            require(emp.balance>0,"Insufficient balance");
            token.transferFrom(address(this), emp._add, emp.balance);
            Orgs[orgAdd].Employees[msg.sender].balance = 0;
    }
}