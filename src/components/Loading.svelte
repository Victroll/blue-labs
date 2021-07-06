<style lang="scss">
    .loader-wrapper {
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(146, 143, 160, 0.95);
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .spinner-wrapper {
        width: 200px;
        height: 200px;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    $animation-curve: cubic-bezier(.28,.99,.63,1);

    .spinner-5 {
        width: 180px;
        height: 180px;
        border-style: solid;
        border-radius: 50%;
        border-width: 5px;
        border-color: transparent;
        border-top-color: rgb(48, 37, 95);
        display: flex;
        justify-content: center;
        align-items: center;
        animation: spin 3s $animation-curve infinite;
    }
    .spinner-4 {
        width: 150px;
        height: 150px;
        border-style: solid;
        border-radius: 50%;
        border-width: 5px;
        border-color: transparent;
        border-top-color: rgb(48, 37, 95);
        display: flex;
        justify-content: center;
        align-items: center;
        animation: spin 3s $animation-curve infinite;
    }
    .spinner-3 {
        width: 120px;
        height: 120px;
        border-style: solid;
        border-radius: 50%;
        border-width: 5px;
        border-color: transparent;
        border-top-color: rgb(48, 37, 95);
        display: flex;
        justify-content: center;
        align-items: center;
        animation: spin 3s $animation-curve infinite;
    }
    .spinner-2 {
        width: 90px;
        height: 90px;
        border-style: solid;
        border-radius: 50%;
        border-width: 5px;
        border-color: transparent;
        border-top-color: rgb(48, 37, 95);
        display: flex;
        justify-content: center;
        align-items: center;
        animation: spin 3s $animation-curve infinite;
    }
    .spinner-1 {
        width: 60px;
        height: 60px;
        border-style: solid;
        border-radius: 50%;
        border-width: 5px;
        border-color: transparent;
        border-top-color: rgb(48, 37, 95);
        display: flex;
        justify-content: center;
        align-items: center;
        animation: spin 3s $animation-curve infinite;
    }
    .spinner-0 {
        width: 30px;
        height: 30px;
        border-style: solid;
        border-radius: 50%;
        border-width: 5px;
        border-color: transparent;
        border-top-color: rgb(48, 37, 95);
        display: flex;
        justify-content: center;
        align-items: center;
        animation: spin 3s $animation-curve infinite;
    }
</style>

<div class="loader-wrapper">
    <div class="spinner-wrapper">
        <div class="spinner-5">
            <div class="spinner-4">
                <div class="spinner-3">
                    <div class="spinner-2">
                        <div class="spinner-1">
                            <div class="spinner-0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>