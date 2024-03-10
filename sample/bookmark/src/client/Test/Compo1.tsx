import { component$} from '@builder.io/qwik';
//
export const Compo1 = component$((props: any) => {
console.log(props.params);
    //
    return (
    <div class="bg-blue-400 text-white px-10 py-20">        
        params = {props.params}
    </div>
    );
});