CREATE TABLE walkers(
  student_id INT PRIMARY KEY,
  first_name VARCHAR(50)
);
INSERT INTO walkers
VALUES(1, 'Johnson');
INSERT INTO walkers
VALUES(2, 'Ruth');
SELECT *
FROM walkers;