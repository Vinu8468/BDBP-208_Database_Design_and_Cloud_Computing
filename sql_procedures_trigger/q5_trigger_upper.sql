DELIMITER //
CREATE TRIGGER emp_name_upper
BEFORE INSERT ON employee
FOR EACH ROW

BEGIN
SET NEW.employee_name = UPPER(NEW.employee_name);
END //

DELIMITER ;

-- since i don't have insert employee...Creating procedure to insert employee records

DELIMITER //
CREATE PROCEDURE insert_emp_table(IN empid VARCHAR(20),IN emp_name VARCHAR(50),IN sal INT,IN dept VARCHAR(30))
BEGIN
INSERT INTO employee(emp_id, employee_name, salary, department) VALUES(empid, emp_name, sal, dept);
END //
DELIMITER ;



CALL insert_emp_table('EMP11', 'Virat Kohli', 3030000, 'Sport');

SELECT * FROM employee;
