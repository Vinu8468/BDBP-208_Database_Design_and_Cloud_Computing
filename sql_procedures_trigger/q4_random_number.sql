-- Random number generator from 1 to 100
DELIMITER //

CREATE FUNCTION random_num() RETURNS INT DETERMINISTIC BEGIN RETURN CEIL(RAND()*100);
 END//

DELIMITER ;
SELECT random_num();

