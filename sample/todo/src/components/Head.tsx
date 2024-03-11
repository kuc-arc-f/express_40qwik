import { component$} from '@builder.io/qwik';
//
export const Head = component$(() => {
    return (
    <div>
        <a href="/">[ Home ]</a>
        <a href="/about">&nbsp; [ about ]</a>
        <a href="/test_api">&nbsp; [ testApi ]</a>
        <a href="/todos">&nbsp; [ Todo ]</a>
        <hr />
    </div>
    );
});

