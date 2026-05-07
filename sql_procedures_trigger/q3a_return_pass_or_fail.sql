-- Creating function to check PASS or FAIL

DELIMITER //

CREATE FUNCTION check_marks(marks INT)
RETURNS VARCHAR(4)
DETERMINISTIC
BEGIN
IF marks >= 40 THEN
RETURN 'PASS';
ELSE
RETURN 'FAIL';
END IF;
END //

DELIMITER ;

SELECT check_marks(30);
SELECT check_marks(45);

