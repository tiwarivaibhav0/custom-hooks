import useDebounce from "./hooks/useDebounce";
import useThrottle from "./hooks/useThrottle";
export default function App() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const throttledSearch = useThrottle(search, 1000);
  useEffect(() => {
    console.log("debounce here", debouncedSearch);
  }, [debouncedSearch]);

  useEffect(() => {
    console.log(" throttle here", throttledSearch);
  }, [throttledSearch]);
  return (
    <div className="App">
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}
