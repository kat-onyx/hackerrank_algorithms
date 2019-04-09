-- Query the names
-- of all American cities in CITY
-- with populations larger than 120000. The CountryCode for America is USA.

-- Input Format

-- The CITY table is described as
-- follows:
select name
from city
where countrycode = "USA" AND population > 120000