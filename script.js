const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
const output = document.getElementById('output');
      const fetchData = async (callback) => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          callback(data.title);
        } catch (error) {
          console.error(error);
        }
      };
      const displayMessage = (message) => {
        output.innerHTML = message;
      };
      document.getElementById('btn').addEventListener('click', () => {
        fetchData(displayMessage);
      });