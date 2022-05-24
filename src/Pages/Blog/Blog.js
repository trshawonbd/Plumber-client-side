import React from 'react';

const Blog = () => {
    return (
<div>
<div class="collapse mb-6">
  <input type="checkbox" class="peer" /> 
  <div class="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-primary-content">
    1. How will you improve the performance of a React Application? (Click to know the answer)
  </div>
  
  <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
  <hr />
    <div>
        Answer: The performance of a react application depends one several criteria. These are: 
        <ul>
            <li>
                 1. If we declare proper state and manage them properly 
            </li>
            <li>
               2. When we can minimize the re rendering
            </li>
            <li>
                3. If we use less CDN and use import file.
            </li>
            <li>
                4. If we use optimized image, it will reduce rendering time. 
            </li>
            <li>
                5. Not use excessive animation and Iframes.
            </li>
        </ul>
    </div>
  </div>
</div>
<div class="collapse mb-6">
  <input type="checkbox" class="peer" /> 
  <div class="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-primary-content">
    2. What are the different ways to manage a state in a React application? (Click to know the answer)
  </div>
  <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
  <hr />
    <div>
        Answer: There are a few ways how we can manage state in react application. Those are: 
        <li>
             useState : useState is the first way to manage a state. It provides a set callback function which one can be used to set or change the initial value. 
        </li>
        <li>
             useReduce: useReducer is used for local or global state. It provides a fuction which helps to manage several state operations.
        </li>
        <li>
            useCotext: useContext is used to reduce the props drillings and which helps to use less state.
        </li>
        <li>
            React Query: React query is a library which helps to fetch data with less state.
        </li>
    </div>
  </div>
</div>
<div class="collapse mb-6">
  <input type="checkbox" class="peer" /> 
  <div class="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-primary-content">
    3. How does prototypical inheritance work? (Click to know the answer)
  </div>
  <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <div>
        ANswer: Prototypical inheritance defines the accessibility of an object from another object. It provides the feature to add methods and properties in an object.
    </div>
  </div>
</div>
<div class="collapse mb-6">
  <input type="checkbox" class="peer" /> 
  <div class="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-primary-content">
    4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts? (Click to know the answer)
  </div>
  <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <div>
        <hr />
        Answer: React always keeps a track of all its virtual DOM. When anything changes, components are rerendered again and compare with the previous DOM. If anything changes that will set in the original DOM. If we use the state directly it may change the reference in the previous DOM. So the new rendered DOM will not able to compare and change the actual DOM.
    </div>
  </div>
</div>
<div class="collapse mb-6">
  <input type="checkbox" class="peer" /> 
  <div class="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-primary-content">
    5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name? (Click to know the answer)
  </div>
  <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
   <div>
       <hr />
       Answer: Firstly, I will implement a map function on an array to get a single product. After getting single product i will use filter method using singleProduct.name === findMethodParamer.name.
   </div>
  </div>
</div>

</div>
    );
};

export default Blog;