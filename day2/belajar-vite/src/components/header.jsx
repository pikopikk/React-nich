export default function MyApp({name}) {
    return <h1>Hello, world! {!name ? 'no props' : name}</h1>;
}