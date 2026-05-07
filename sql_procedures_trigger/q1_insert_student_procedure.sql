-- Creating stored procedure to insert student records

DELIMITER //

CREATE PROCEDURE insert_student(
    IN stu_id VARCHAR(20),
    IN stu_name VARCHAR(50),
    IN dept VARCHAR(50)
)

BEGIN

    INSERT INTO student(student_id, student_name, department)
    VALUES(stu_id, stu_name, dept);

END //

DELIMITER ;


CALL insert_student('255HSBD025', 'Sumirtha Joyce', 'big data biology');

CALL insert_student('255HSBD026', 'Sumithra Raju', 'big data biology');

CALL insert_student('255HSBD024', 'Suhani Bansal', 'big data biology');

CALL insert_student('255HSBD023', 'Shreyas R', 'big data biology');

CALL insert_student('255HSBD022', 'Shalini Gooty', 'big data biology');


SELECT * FROM student;
