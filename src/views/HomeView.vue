<script setup>
import WebApp from '@twa-dev/sdk';
</script>
<template>
  <main class="pt-4">
    <div class="flex justify-center">
      <div class="flex flex-col items-center text-center gap-6 max-w-lg">
        <a class="btn btn-neutral">
          PRO release - Join waitlist
          <i class="fa-solid fa-circle-arrow-right text-lg"></i>
        </a>

        <h1 class="font-bold text-5xl">
          Let's build
          <span class="text-primary">Together</span>
        </h1>

        <span>
          App Name is an open-source application that leverages your bussiness and
          help you build amazing products to your costumers
        </span>

        <div class="flex gap-4">
          <button class="btn btn-primary" @click="WebApp.showAlert('Hello there')">
            <i class="fa-solid fa-rocket"></i>
            Get started
          </button>

          <code class="btn btn-soft border border-neutral">
            $ npm i app-name
            <i class="fa-solid fa-copy text-lg text-secondary"></i>
          </code>
        </div>

        <a class="link link-secondary">
          Installation guide
          <i class="fa-solid fa-arrow-right text-sm"></i>
        </a>
      </div>
    </div>
  </main>
</template>
