Feature: Lift Operation

@smoke
Scenario: Reach 5th fllor using Lift
Given Close the door after boarding
When I press the 5th floor
And The lift moves
Then The lift door poen at 5th floor
