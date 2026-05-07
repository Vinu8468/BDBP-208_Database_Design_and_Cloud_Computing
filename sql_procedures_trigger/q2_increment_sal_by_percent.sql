-- Creating stored procedure to update salary by percentage department-wise

DELIMITER //

CREATE PROCEDURE update_sal_by_per(IN percentage INT,IN dept VARCHAR(30))

BEGIN
UPDATE employee SET salary = salary + (salary * (percentage / 100)) WHERE department = dept;
END //

DELIMITER ;

CALL update_sal_by_per(10, 'IT');

CALL update_sal_by_per(2, 'Sales');

SELECT * FROM employee;
