/**
	SHOPPY 테이블 정의
*/
-- shoppy_member 테이블 생성
use hrdb2019;
select database();
show tables;

-- shoppy로 시작하는 모든 테이블 조회
select * from information_schema.tables
where table_name like 'shoppy%';

--
CREATE TABLE SHOPPY_MEMBER(
	  ID					VARCHAR(30)		PRIMARY KEY,
	  PWD			  		VARCHAR(50)		NOT NULL,
	  NAME					VARCHAR(10)		NOT NULL,
	  PHONE					CHAR(13)		NOT NULL, 
	  EMAILNAME				VARCHAR(20)		NOT NULL,
	  EMAILDOMAIN			VARCHAR(20)		NOT NULL,    
	  ZIPCODE				CHAR(5),
	  ADDRESS				VARCHAR(80),
	  MDATE					DATETIME
);
desc shoppy_member;
select * from shoppy_member;

-- 'test9' 중복체크 : 결과를 count 함수로 반환
select count(id) as result from shoppy_member where id = 'test9';
-- {result: 0}

USE HRDB2019;
SELECT * FROM INFORMATION_SCHEMA.TABLES 
	WHERE TABLE_NAME LIKE 'SHOPPY%';
    
-- SHOPPY_PRODUCT
use hrdb2019;
drop table shoppy_product;
CREATE TABLE SHOPPY_PRODUCT(
	PID		INT 	PRIMARY KEY		AUTO_INCREMENT,
    PNAME 	VARCHAR(50)		NOT NULL,
    PRICE 	INT,
    DESCRIPTION		VARCHAR(200),
    UPLOAD_FILE		json,
    SOURCE_FILE		json,
    PDATE			DATETIME
);

DESC SHOPPY_PRODUCT;
SELECT * FROM SHOPPY_PRODUCT;

SET SQL_SAFE_UPDATES = 0;   -- 해제: 0, 설정: 1
delete from shoppy_product;
commit;
select * from shoppy_product;
select source_file from shoppy_product;

--
select  pid,
		pname as name,
		price,
		description as info,
		concat('http://localhost:9000/', upload_file->>'$[0]') as image,
		source_file,
		pdate
from shoppy_product;

-- http://localhost:9000/["upload_files\\1739163158340-849078071-1.webp", "upload_files\\1739163158340-911632745-2.webp", "upload_files\\1739163158340-462908659-3.webp", "upload_files\\1739163158341-81325715-4.webp", "upload_files\\1739163158342-709014159-5.webp", "upload_files\\1739163158342-110372512-6.webp", "upload_files\\1739163158342-207791282-7.webp"]
--
-- http://localhost:9000/upload_files\\1739163158340-849078071-1.webp

delete from shoppy_product where pid in (6, 7, 8);
select * from shoppy_product;
commit;












