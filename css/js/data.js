diff --git a//dev/null b/js/data.js
index 0000000000000000000000000000000000000000..63ac77ca935979ec8d3a14cb028243b19f0e7cf2 100644
--- a//dev/null
+++ b/js/data.js
@@ -0,0 +1,17 @@
+const venues = [
+  {id:1, sport:'cricket', name:'TurfX', location:'Mumbai', lat:19.0760, lng:72.8777, image:'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg', price:1000, facilities:['Lighting','Washrooms','Equipment'], slots:['6 AM','8 AM','10 AM','5 PM','7 PM']},
+  {id:2, sport:'football', name:'Goal Arena', location:'Delhi', lat:28.7041, lng:77.1025, image:'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg', price:800, facilities:['Lighting','Washrooms'], slots:['7 AM','9 AM','6 PM']},
+  {id:3, sport:'badminton', name:'Shuttle Hub', location:'Bangalore', lat:12.9716, lng:77.5946, image:'https://images.pexels.com/photos/163407/badminton-court-badminton-sport-shuttlecock-163407.jpeg', price:500, facilities:['AC','Washrooms'], slots:['6 AM','8 AM','10 AM']},
+  {id:4, sport:'pickleball', name:'Pickle Center', location:'Pune', lat:18.5204, lng:73.8567, image:'https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg', price:600, facilities:['Lighting','Equipment'], slots:['5 PM','6 PM','7 PM']},
+  {id:5, sport:'squash', name:'Squash Zone', location:'Chennai', lat:13.0827, lng:80.2707, image:'https://images.pexels.com/photos/3638029/pexels-photo-3638029.jpeg', price:700, facilities:['AC','Washrooms'], slots:['6 AM','7 AM','8 AM']},
+  {id:6, sport:'tennis', name:'Ace Courts', location:'Hyderabad', lat:17.3850, lng:78.4867, image:'https://images.pexels.com/photos/1161355/pexels-photo-1161355.jpeg', price:900, facilities:['Lighting','Washrooms'], slots:['6 AM','8 AM','5 PM']}
+];
+
+let invites = [
+  {sport:'Football', detail:'Need 2 players for Football at 5 PM at TurfX, Mumbai'},
+  {sport:'Cricket', detail:'Looking for 1 bowler for match at 7 AM at Goal Arena, Delhi'}
+];
+
+let chatMessages = [
+  {user:'Admin', msg:'Welcome to Maidaan chat!'}
+];
