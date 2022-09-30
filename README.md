# GraphQL_TASK

● A GraphQL API that takes a chat message string in GraphQL query format as input, and returns a JSON object containing information about its contents as described below.
  
Your service should parse the following data from the input:
1. mentions - A way to mention a user. Always starts with an '@' and ends when hitting a non-word character. (https://confluence.atlassian.com/hipchatdc3/get-teammates-attention-966656092.html)
2. Emoticons - For this exercise, you only need to consider 'custom' emoticons which are alphanumeric strings, no longer than 15 characters, contained in parenthesis. You can assume that anything matching this format is an emoticon. (https://confluence.atlassian.com/hipchatdc3/fun-with-emoticons-966656104.html)
3. Links - Any URLs contained in the message, along with the page's title.

![image](https://user-images.githubusercontent.com/103871220/193339092-8ef44541-0191-4c3c-98e6-70563ca04bfa.png)
