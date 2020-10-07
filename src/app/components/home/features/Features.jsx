import React from 'react';
import FeaturesItem from './FeaturesItem';

const Features = () => {
  return (
    <section className="features">
      <div className="container">

        <div className="section-title">
          <h2>Features</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <FeaturesItem imgSide="left" title="Voluptatem dignissimos provident quasi corporis voluptates sit assumenda." imgURL={require("../../../../assets/img/features-1.svg")} >
          <p className="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
            </p>
          <ul>
            <li><i className="icofont-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i className="icofont-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          </ul>
        </FeaturesItem>

        <FeaturesItem imgSide="right" title="Corporis temporibus maiores provident" imgURL={require("../../../../assets/img/features-2.svg")} >
          <p className="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </FeaturesItem>

        <FeaturesItem imgSide="left" title="Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas" imgURL={require("../../../../assets/img/features-3.svg")} >
          <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
          <ul>
            <li><i className="icofont-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i className="icofont-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i className="icofont-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
          </ul>
        </FeaturesItem>

        <FeaturesItem imgSide="right" title="Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in" imgURL={require("../../../../assets/img/features-4.svg")} >
          <p className="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </FeaturesItem>
      </div>
    </section>
  );
}

export default Features;