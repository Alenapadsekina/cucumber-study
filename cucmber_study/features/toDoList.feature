Feature: User can manage tasks in the list
User can manage tasks in the list

  Scenario: <Scenario Name>
    Given User is on home page
    When types a '<task>' in the task field
    And clicks Add button
    Then a '<new task>' is added to the list

  Scenario: <Scenario Name>
    Given User is on the Home page
    And has several tasks in the list
    When user checks the checkbox
    Then the '<problem>' is marked as 'Done'