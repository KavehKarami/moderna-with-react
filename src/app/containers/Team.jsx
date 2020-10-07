import React from 'react';
import Breadcrumb from '../components/shared/sections/Beadcrumb';
import TeamItem from '../components/team/TeamItem';

const Team = () => {
  return (
    <main id="main">
      <Breadcrumb name="Our Team" />

      <section className="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
        <div className="container">
          <div className="row">
            <TeamItem person="Walter White" job="Chief Executive Officer" imgURL={require("../../assets/img/team/team-1.jpg")} description="Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis repudiandae perferendis qui. Neque non quidem sit sed pariatur quia modi ea occaecati. Incidunt ea non est corporis in." />
            <TeamItem person="Sarah Jhonson" job="Product Manager" imgURL={require("../../assets/img/team/team-2.jpg")} description="Aspernatur iste esse aliquam enim et corporis. Molestiae voluptatem aut eligendi quis aut. Libero vel amet voluptatem eos rerum non doloremque. Dolores eum non." />
            <TeamItem person="William Anderson" job="CTO" imgURL={require("../../assets/img/team/team-3.jpg")} description="Ut enim possimus nihil cupiditate beatae. Veniam facere quae non qui necessitatibus rerum eos vero. Maxime sit sunt quo dolor autem est qui quaerat aliquid. Tenetur possimus qui enim." />
            <TeamItem person="Amanda Jepson" job="Accountant" imgURL={require("../../assets/img/team/team-4.jpg")} description="Sint qui cupiditate. Asperiores fugit impedit aspernatur et mollitia. Molestiae qui placeat labore assumenda id qui nesciunt quo reprehenderit. Rem dolores similique quis soluta culpa enim quia ratione ea." />
            <TeamItem person="Niall Katz" job="Marketing" imgURL={require("../../assets/img/team/team-5.jpg")} description="Aut ex esse explicabo quia harum ea accusamus excepturi. Temporibus at quia quisquam veritatis impedit. Porro laborum voluptatum sed necessitatibus a saepe. Deserunt laborum quasi consequatur voluptatum iusto sint qui fuga vel. Enim eveniet sed quibusdam rerum in. Non dicta architecto consequatur quo praesentium nesciunt." />
            <TeamItem person="Demi Lewis" job="Financing" imgURL={require("../../assets/img/team/team-6.jpg")} description="Amet labore numquam corrupti est. Nostrum amet voluptas consectetur dolor voluptatem architecto distinctio consequuntur eligendi. Quam impedit enim aut nesciunt aut dicta quam exercitationem. Reprehenderit exercitationem magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis." />
          </div>
        </div>
      </section>

    </main>
  );
}

export default Team;