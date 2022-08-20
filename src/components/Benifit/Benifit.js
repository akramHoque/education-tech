import React from 'react';
import img from '../../images/abc.webp';

const Benifit = () => {
  return (
    <div className='d-flex  my-5'>
      <div className="col-md-6 col-lg-6 col-12">
        <img src={img} alt="" />
      </div>
      <div className="col-md-6 col-lg-6 col-12">
        <h2>Scripting with Elasticsearch</h2>
        <p>Scripting is an important part of the toolbox of any Elasticsearch user, and enables evaluating custom expressions that may be used to synthesize fields or provide customized scoring. In this post we take a brief look at the upcoming changes to the scripting module and the different scripting languages available to use today.</p>
        <p>In a recent blog post about scripting, Elasticsearch outlined some coming changes to its scripting support. The two important takeaways from that post is that the sandboxing story of scripts will be improved and that the default scripting language will be changed from MVEL to Groovy.</p>
      </div>
    </div>
  );
};

export default Benifit;