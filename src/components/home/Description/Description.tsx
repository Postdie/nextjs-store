import styles from './Description.module.sass';
import Image from 'next/image';

export const Description = () => {
    return(
        <section className='{styles.Description}'>
            <Image 
                src="/images/FutureWorld.jpg" 
                alt="products marketplace" 
                width={500} 
                height={300}
            />
            <div className={styles.Description__text}>
                <h2>Descripción</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quidem debitis a doloribus quam voluptates praesentium dolorum accusamus veritatis obcaecati, totam possimus architecto cum minus nemo? Dolorem molestias necessitatibus praesentium.</p>
            </div>
        </section>
    )
}