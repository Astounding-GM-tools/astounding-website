<script lang="ts">
    import {onMount} from 'svelte';
    export let slug: string;

    onMount(()=>{
        // console.log(slug);

    })
</script>

<section class="character">
    <h2 class="name">{slug}</h2>
    <h4>Race, age, gender, occupation & status</h4>
    <section class="portrait">
        <h3>portrait</h3>
    </section>
    <section class="stats">
        <dl>
            <dt><i>⚡</i>Speed</dt>
            <dd>42</dd>
            
            <dt><i>🗡️</i>Fight</dt>
            <dd>53</dd>


            <dt><i>🛡️</i>Tough</dt>
            <dd>44</dd>

            <dt><i>🔥</i>Will</dt>
            <dd>81</dd>

            <dt><i>❤️</i>Health</dt>
            <dd>18</dd>
        </dl>
    </section>
    <section class="description">
        <h4>Description and mannerisms</h4>
                <h5>Formidable Presence</h5>
                <p>
                    The barkeeper stands behind the polished mahogany counter, exuding a rugged strength that fills the room, commanding attention with his burly physique and intense gaze.
                </p>

                <h5>
                    Weathered Wisdom
                </h5>
                <p>
                    A salt-and-pepper beard frames his face, adding a touch of wisdom to his rugged appearance, hinting at the stories etched in the lines of his weathered skin.
                </p>
                
                <h5>Inked Tales</h5>
                <p>
                    Intricate tattoos adorn his muscular arms, serving as visual narratives that showcase battles fought and victories won, adding to his aura of invincibility.
                </p>
                <h5>
                    Guardian of the Bar
                </h5>
                <p>
                    With a booming voice and hands calloused from years of labor, the barkeeper stands as both a fierce protector and a warm confidant, ensuring order and tranquility in the bustling tavern.
                </p>
        <h4>Traits, abilities and items</h4>
        <h5>Hefty cudgel</h5>
        <p>2D6: Gnarled and ugly, but perfectly weighted. A souvenir from the new world, collected from a dunk soldier unable to settle his tab.</p>
        <h4>Secrets</h4>
        <h5>Concealed Meetings</h5>
        <p>
            Through discreet observation, the bartender has witnessed Hilda and Igor's secret rendezvous, their stolen moments of affection hidden away from prying eyes, fueling the intensity of their love.
        </p>
        <h5>A Jealous Footpad</h5>
        <p>
            The bartender has overheard murmurs of jealousy from a footpad within Hilda's clan, who harbors deep feelings for Igor. Consumed by envy, this footpad longs to eliminate Igor, seeing him as an obstacle to their own desires.
        </p>

    </section>
</section>

<style>

    .portrait {
        display: flex;
        height: 80px;
        justify-content: center;
        align-items: center;
        background-color: bisque;
        border-radius: 15px;
    }

    dl {
        height: 2.85em;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    i {
        padding-right: 8px;
    }

    dt, dd {
        display:flex;
        justify-content: center;
        align-items: center;
        min-height: 1.4em;
        margin: 0;
    }
    h5 {
        margin-bottom: 0;
    }
    p {
        margin-top: 0;
    }
</style>