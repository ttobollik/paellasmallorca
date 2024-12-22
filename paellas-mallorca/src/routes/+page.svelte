<script>
  import Section from './components/Section.svelte';
</script>

<div class="flex justify-center my-4">
  <img src="/images/LogoFullLg.png" alt="Paella Experience Logo" class="h-48" />
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Section 
    title="Who Are We" 
    description="Learn about our story and vision." 
    image="/images/1.png" 
    link="/whoweare" 
  />
  <Section 
    title="What Do We Do" 
    description="Discover the amazing services we provide." 
    image="/images/2.png" 
    link="/whatwedo" 
  />
  <Section 
    title="Where Are We" 
    description="Find out where you can join us." 
    image="/images/3.png" 
    link="/whereweare" 
  />
</div>
