<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 m7">
          <div class="section-heading">
            <h2>Login</h2>
          </div>
        </div>
        <div class="col-md-8">
          <div class="contact-form">
            <!-- <form id="contact" action="" method="post"> -->
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <fieldset>
                  <input
                    name="email"
                    v-model="userData.email"
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="E-Mail Address"
                    required=""
                  />
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <input
                    type="password"
                    v-model="userData.password"
                    class="form-control"
                    placeholder="Enter Your Password"
                  />
                </fieldset>
              </div>
              <div class="col-lg-12 d-flex justify-content-end">
                <fieldset>
                  <button
                    type="submit"
                    id="form-submit"
                    class="filled-button"
                    @click="accountLogin()"
                  >
                    Login
                  </button>
                </fieldset>
              </div>
            </div>
            <!-- </form> -->
          </div>
        </div>
        <div class="col-md-4">
          <ul class="accordion">
            <li>
              <a>Accordion Title One</a>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                  voluptate nihil eumester consectetur similiqu consectetur.<br /><br />Lorem
                  ipsum dolor sit amet, consectetur adipisic elit. Et,
                  consequuntur, modi mollitia corporis ipsa voluptate corrupti
                  elite.
                </p>
              </div>
            </li>
            <li>
              <a>Second Title Here</a>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                  voluptate nihil eumester consectetur similiqu consectetur.<br /><br />Lorem
                  ipsum dolor sit amet, consectetur adipisic elit. Et,
                  consequuntur, modi mollitia corporis ipsa voluptate corrupti
                  elite.
                </p>
              </div>
            </li>
            <li>
              <a>Accordion Title Three</a>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                  voluptate nihil eumester consectetur similiqu consectetur.<br /><br />Lorem
                  ipsum dolor sit amet, consectetur adipisic elit. Et,
                  consequuntur, modi mollitia corporis ipsa voluptate corrupti
                  elite.
                </p>
              </div>
            </li>
            <li>
              <a>Fourth Accordion Title</a>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                  voluptate nihil eumester consectetur similiqu consectetur.<br /><br />Lorem
                  ipsum dolor sit amet, consectetur adipisic elit. Et,
                  consequuntur, modi mollitia corporis ipsa voluptate corrupti
                  elite.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/login.js"></script>

<style>
.m7 {
  margin-top: 7rem;
}
</style>
