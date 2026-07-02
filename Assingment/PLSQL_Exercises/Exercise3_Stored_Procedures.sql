-- Exercise 3: Stored Procedures
-- Procedure to apply a discount to loan interest rate for senior customers
CREATE OR REPLACE PROCEDURE apply_senior_discount(
    p_age IN NUMBER,
    p_interest_rate IN NUMBER,
    p_new_rate OUT NUMBER
) AS
BEGIN
    IF p_age > 60 THEN
        p_new_rate := p_interest_rate * 0.90;
    ELSE
        p_new_rate := p_interest_rate;
    END IF;
END;
/

DECLARE
    v_new_rate NUMBER;
BEGIN
    apply_senior_discount(68, 12.5, v_new_rate);
    DBMS_OUTPUT.PUT_LINE('Updated interest rate: ' || v_new_rate);
END;
/
