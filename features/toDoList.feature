Feature: User sees a greeting when types in the name

  Scenario:
    Given User is on home page
    When types a '<task>' in the task field
    And clicks Add button
    Then a '<new task>' is added to the list
