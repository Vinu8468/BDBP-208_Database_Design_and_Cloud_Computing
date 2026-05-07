DROP PROCEDURE update_sal_by_per;

DROP FUNCTION check_marks;

-- seeing status after dropping

SHOW PROCEDURE STATUS
WHERE Db = 'student_account';

SHOW FUNCTION STATUS
WHERE Db = 'student_account';
