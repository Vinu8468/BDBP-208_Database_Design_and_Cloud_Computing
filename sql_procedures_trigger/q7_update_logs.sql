-- update log if salary is change
CREATE TABLE employee_log_v2(log_id INT AUTO_INCREMENT PRIMARY KEY, emp_id VARCHAR(20), log VARCHAR(255));

DELIMITER //

CREATE TRIGGER employee_salary_audit
AFTER UPDATE ON employee
FOR EACH ROW
BEGIN
IF OLD.salary <> NEW.salary THEN
INSERT INTO employee_log_v2(emp_id, log)
VALUES(NEW.emp_id, CONCAT('Salary changed from ', OLD.salary, ' to ', NEW.salary));
END IF;
END //

DELIMITER ;
UPDATE employee SET salary = 70000 WHERE emp_id = 'EMP01';
SELECT * FROM employee_log_v2;

