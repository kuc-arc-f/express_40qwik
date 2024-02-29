import { component$} from '@builder.io/qwik';
//
export const Head = component$(() => {
    return (
    <div>
        <a href="/">[ Home ]</a>
        <a href="/about">&nbsp; [ about ]</a>
        <a href="/test_api">&nbsp; [ testApi ]</a>
        <hr />
    </div>
    );
});

