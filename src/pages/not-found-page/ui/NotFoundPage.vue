<template>
  <section class="not-found-container">
    <h1 class="code">404</h1>
    <p class="message">Oops! Page not found.</p>
    <RouterLink to="/" class="home-button">Go to Home</RouterLink>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  gap: 1rem;

  .code {
    font-size: 4.5em;
    font-weight: 600;
    color: var(--color-control-fg);
    margin-bottom: spacing(4);
  }

  .message {
    font-size: 1.2em;
    color: var(--color-control-fg);
  }

  .home-button {
    margin-top: spacing(2);
    padding: spacing(2) spacing(4);
    background-color: var(--color-accent);
    color: var(--color-on-accent);
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      background-color: var(--color-accent-hover);
    }
  }
}
</style>
