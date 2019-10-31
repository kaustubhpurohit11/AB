Feature: Seek Bar in Instagram Video
Seek Bar should be present in the video

Scenario: View the video. 
Users should be able to view the video and the Seek bar should be visible.


Given I am watching a video
When  The video is playing
Then I should see the Seek Bar
And The Seek bar should able to navigate through the video
