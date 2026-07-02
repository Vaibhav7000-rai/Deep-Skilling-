-- Exercise 1: Control Structures
-- Scenario 1: Discount for customers above 60 years old
DECLARE
    v_age NUMBER := 68;
    v_interest_rate NUMBER := 12.5;
    v_new_rate NUMBER;
BEGIN
    IF v_age > 60 THEN
        v_new_rate := v_interest_rate * 0.90;
        DBMS_OUTPUT.PUT_LINE('Discount applied. New interest rate: ' || v_new_rate);
    ELSE
        v_new_rate := v_interest_rate;
        DBMS_OUTPUT.PUT_LINE('No discount applied. Interest rate remains: ' || v_new_rate);
    END IF;
END;
/

-- Scenario 2: Promote a customer to VIP based on balance
DECLARE
    v_balance NUMBER := 150000;
    v_customer_status VARCHAR2(20);
BEGIN
    v_customer_status := CASE
        WHEN v_balance >= 100000 THEN 'VIP'
        WHEN v_balance >= 50000 THEN 'GOLD'
        ELSE 'STANDARD'
    END;

    DBMS_OUTPUT.PUT_LINE('Customer status: ' || v_customer_status);
END;
/

-- Scenario 3: Send reminders for loans due within the next 30 days
DECLARE
    CURSOR c_loans IS
        SELECT loan_id, customer_name, due_date
        FROM loans
        WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR rec IN c_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: ' || rec.customer_name ||
                             ' has loan ' || rec.loan_id ||
                             ' due on ' || rec.due_date);
    END LOOP;
END;
/
