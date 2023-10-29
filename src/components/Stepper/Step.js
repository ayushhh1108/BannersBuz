function Stepper() {
  return (
    <div>
      <div class="container padding-bottom-3x mb-1">
        <div class="card my-5 border-0">
          <div class="card-body border-0">
            <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
              <div class="step completed">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    1
                  </div>
                </div>
                <h4 class="step-title">Customize Product</h4>
              </div>
              <div class="step">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    2
                  </div>
                </div>
                <h4 class="step-title">Shopping Cart</h4>
              </div>
              <div class="step">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    3
                  </div>
                </div>
                <h4 class="step-title">Payment</h4>
              </div>
              <div class="step">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    4
                  </div>
                </div>
                <h4 class="step-title">Last step to success</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
