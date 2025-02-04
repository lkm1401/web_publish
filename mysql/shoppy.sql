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




