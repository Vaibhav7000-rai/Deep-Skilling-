package com.example.springdatajpa;

import com.example.springdatajpa.entity.Employee;
import com.example.springdatajpa.repository.EmployeeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class EmployeeRepositoryTest {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Test
    void shouldSaveAndFetchEmployee() {
        Employee employee = new Employee("Alice", "Engineering");

        Employee saved = employeeRepository.save(employee);
        Employee found = employeeRepository.findById(saved.getId()).orElseThrow();

        assertThat(found.getName()).isEqualTo("Alice");
        assertThat(found.getDepartment()).isEqualTo("Engineering");
    }
}
