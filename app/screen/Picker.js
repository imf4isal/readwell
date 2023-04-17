const items = [
    {
        id: 1,
        title: 'Business',
    },
    {
        id: 2,
        title: 'Productivity',
    },
    {
        id: 3,
        title: 'History',
    },
    {
        id: 4,
        title: 'Science',
    },
];

export default function App() {
    const [category, setCategory] = useState();

    return (
        <Screen>
            <AppPicker
                items={items}
                icon="apps"
                placeholder="Category"
                onSelect={(item) => setCategory(item)}
                selectedItem={category}
            />
        </Screen>
    );
}
