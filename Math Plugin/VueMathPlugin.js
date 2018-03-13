export default { 
  install: function (Vue) { 
    Vue.directive('square', function (el, binding) { 
      el.innerHTML = Math.pow(binding.value, 2); 
    }); 
    Vue.directive('sqrt', function (el, binding) { 
      el.innerHTML = Math.sqrt(binding.value); 
    }); 
	Vue.directive('sine', function (el, binding) { 
      el.innerHTML = Math.sin(binding.value); 
    });
	Vue.directive('cosine', function (el, binding) { 
      el.innerHTML = Math.cos(binding.value); 
    });
	Vue.directive('tangent', function (el, binding) { 
      el.innerHTML = Math.tan(binding.value); 
    });
  } 
}; 

