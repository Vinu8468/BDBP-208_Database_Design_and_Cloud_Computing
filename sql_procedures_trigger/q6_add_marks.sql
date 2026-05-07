--the score wasn't considered in the before procedure so..  Procedure to insert student records with marks

DELIMITER //

CREATE PROCEDURE insert_student_marks(IN stu_id VARCHAR(20),IN stu_name VARCHAR(50),IN dept VARCHAR(50),IN stu_marks INT)
BEGIN

INSERT INTO student(student_id, student_name, department, marks) VALUES(stu_id, stu_name, dept, stu_marks);

END //

DELIMITER ;

-- Trigger to add 2 extra marks for Big Data Biology students

DELIMITER //

CREATE TRIGGER add_bonus_marks
BEFORE INSERT ON student
FOR EACH ROW
BEGIN
IF NEW.department = 'big data biology' THEN
SET NEW.marks = NEW.marks + 2;
END IF;
END //

DELIMITER ;

CALL insert_student_marks("256HSBD030","Zubera hasan","big data biology",35);
SELECT * FROM student;
