import {CORE_CONCEPTS} from '../../data';
import { CoreConcepts } from '../CoreComponent/CoreConcepts';

export function CoreConcept(){
    return (
        <section id='core-concepts'>
            <h2>Core concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((item) => <CoreConcepts {...item}/>)}
            </ul>
        </section>
    )
}