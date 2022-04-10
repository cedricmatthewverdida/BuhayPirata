<script>
  // @ts-nocheck
  
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

<div class="flex h-screen">
  <div class="m-auto">
  <div class="card lg:card-side bg-base-100 shadow-xl glass">
    <figure>
      <img src="https://i.pinimg.com/originals/c5/d7/e3/c5d7e3bf2656c42b1a45db0c8607dedb.jpg" style="height: 500px; width: 500px" alt="Buhay Pirata">
    </figure>
    <div class="card-body w-96">
      <h2 class="card-title buhayPirata flex items-center justify-center">Buhay Pirata</h2>
      
      
      <div class="mt-5">
        <div class="form-control w-full max-w-xs">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <input
            id="username"
            value={formData.username}
            on:input={(e) => {
              formData.username = e.target.value;
            }}
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          >
        </div>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            id="password"
            type="password"
            value={formData.password}
            on:input={(e) => (formData.password = e.target.value)}
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs "
          >
        </div>
  
        <button on:click={login} class="btn btn-primary btn-block mt-5">Login</button>

        <div class="mt-2">
          <small on:click={register}>Create Account</small>
        </div>
  
      </div>

    </div>
  </div>
</div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Creepster&family=Press+Start+2P&display=swap');
  .buhayPirata{
    /* font-family: 'Bungee Inline', cursive; */
    font: 3.5em 'Creepster';
  }
</style>