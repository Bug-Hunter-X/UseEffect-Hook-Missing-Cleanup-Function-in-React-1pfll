```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController(); // Abort controller for cleanup
    const signal = controller.signal; // Signal to abort fetch request
    
    fetch('https://api.example.com/data', { signal })
      .then(response => {
        if (!response.ok) { throw new Error('Network response was not ok'); }
        return response.json();
      })
      .then(data => {
        if (!signal.aborted) { setCount(data.count); }
      })
      .catch(error => {
        if (!signal.aborted) {
          console.error('Error fetching data:', error); 
        }
      });

    return () => controller.abort(); // Cleanup function
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```