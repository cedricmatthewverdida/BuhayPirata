<script>
  // @ts-nocheck

  import frontimage from "../assets/frontimage.jpg";
  import userAPI from "..//api/user";
  import router from "../router";

  const formData = {
    username: "",
    password: "",
  };

  const login = async () => {
    console.log("login", formData);
    await userAPI
      .login(formData)
      .then((res) => {
        if (res.status === 200) {
          router.push("/home");
        }
      })
      .catch((err) => {
        alert("Invalid username or password");
      });
  };

  const register = async () => {
    console.log("register", formData);
    await userAPI
      .register(formData)
      .then((res) => {
        if (res.status === 200) {
          router.push("/home");
        }
      })
      .catch((err) => {
        alert("Something went wrong!");
      });
  };
</script>

<div class="window-body">
  <div class="field-row center">
    <img
      src={frontimage}
      style="width: 128px;"
      alt="frontimage"
      class="center"
    />
  </div>

  <div class="field-row center">
    <span>please enter your login details</span>
  </div>
  <div class="field-row center">
    <label for="username">Username: </label>
    <input
      id="username"
      type="text"
      value={formData.username}
      on:input={(e) => {
        formData.username = e.target.value;
      }}
      style="margin-left: 1em; width: 250px;"
      placeholder="username"
    />
  </div>
  <div class="field-row center">
    <label for="password">Password: </label>
    <input
      id="password"
      type="password"
      value={formData.password}
      on:input={(e) => (formData.password = e.target.value)}
      style="margin-left: 1em; width: 250px;"
    />
  </div>
  <div class="field-row center">
    <button class="center" on:click={login} style="width: 150px;">Login</button>
    <button class="center" on:click={register} style="width: 150px;"
      >Signup</button
    >
  </div>
</div>

<style>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
