-- Using transaction with rollback

START TRANSACTION;
UPDATE account SET balance = balance + 1000 WHERE acc_no = 'UNIBNK003';

UPDATE account SET balance = balance - 1000 WHERE acc_no = 'UNIBNK004';

SELECT * FROM account;
ROLLBACK;
SELECT * FROM account;

-- Using transaction with commit
START TRANSACTION;
UPDATE account SET balance = balance + 1000 WHERE acc_no = 'UNIBNK005';

UPDATE account SET balance = balance - 1000 WHERE acc_no = 'UNIBNK006';
COMMIT;
SELECT * FROM account;
