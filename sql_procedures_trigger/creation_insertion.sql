-- Creating the database
CREATE DATABASE student_account;

-- Selecting the database
USE student_account;

-- Creating student table
CREATE TABLE student(
    student_id VARCHAR(20) PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL
);

-- Creating employee table
CREATE TABLE employee(
    emp_id VARCHAR(20) PRIMARY KEY,
    employee_name VARCHAR(50) NOT NULL,
    salary INT NOT NULL,
    department VARCHAR(30) NOT NULL
);

-- Creating account table
CREATE TABLE account(
    acc_no VARCHAR(20) PRIMARY KEY,
    holder_name VARCHAR(50) NOT NULL,
    balance DECIMAL(10,2) NOT NULL
);

-- Inserting values into student table
INSERT INTO student(student_id, student_name, department)
VALUES
('255HSBD027', 'Vineeth Devadiga', 'big data biology'),
('255HSBD001', 'Aheli Biswas', 'big data biology'),
('255HSBD005', 'Atharva Kadam', 'big data biology'),
('255HSBB010', 'Hemanth Bandru', 'biotech and bioinfo');

-- Inserting values into employee table
INSERT INTO employee(emp_id, employee_name, salary, department)
VALUES
('EMP01', 'Rahul Sharma', 55000, 'Finance'),
('EMP02', 'Ananya Rao', 62000, 'Human Resources'),
('EMP03', 'Vikram Reddy', 48000, 'IT'),
('EMP04', 'Sneha Iyer', 71000, 'Marketing'),
('EMP05', 'Arjun Mehta', 53000, 'Operations'),
('EMP06', 'Priya Nair', 60000, 'Research'),
('EMP07', 'Karan Patel', 45000, 'Sales'),
('EMP08', 'Divya Shetty', 67000, 'Finance'),
('EMP09', 'Rohit Verma', 52000, 'IT'),
('EMP10', 'Meera Joshi', 75000, 'Management');

-- Inserting values into account table
INSERT INTO account(acc_no, holder_name, balance)
VALUES
('UNIBNK001', 'Rahul Sharma', 15230.75),
('UNIBNK002', 'Ananya Rao', 28450.00),
('UNIBNK003', 'Vikram Reddy', 9800.50),
('UNIBNK004', 'Sneha Iyer', 45210.90),
('UNIBNK005', 'Arjun Mehta', 123000.00),
('UNIBNK006', 'Priya Nair', 7650.25),
('UNIBNK007', 'Karan Patel', 33440.80),
('UNIBNK008', 'Divya Shetty', 56000.60),
('UNIBNK009', 'Rohit Verma', 8700.00),
('UNIBNK010', 'Meera Joshi', 99999.99);

-- Displaying all tables
SHOW TABLES;

-- Displaying structure of tables
DESC student;
DESC employee;
DESC account;

-- Viewing data from tables
SELECT * FROM student;
SELECT * FROM employee;
SELECT * FROM account;
