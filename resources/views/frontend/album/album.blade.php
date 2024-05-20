@extends('frontend.layout.app')
@section('content')
<main>
    <!-- Breadcum Start -->
    <section class="breadcum v1 bg-cover-center pt-50 pb-50 pt-md-70 pb-md-70 pt-xl-120 pb-xl-100 pt-xxl-140 pb-xxl-124" data-background="assets/img/breadcum/v1/bg.jpg">
        <div class="container">
            <h2 class="text-4 text-xl-3 text-xxl-2 text-bold">Our Album</h2>
        </div>
        <div class="breadcum-list pt-30 mt-30 mt-xl-85">
            <div class="container">
                <ul>
                    <li>Our Album</li>
                </ul>
            </div>
        </div>
    </section>
    <!-- Breadcum End -->
    <!-- Latest Project Start -->
    <section class="latest-project v1 pt-50 pb-50 pt-md-70 pb-md-70 pt-xl-100 pb-xl-100">
        <div class="container">
            <div class="project-menu-link mt-30">
                <ul class="project-btns">
                    @if ($albums != null)
                        <li>
                            <button class="active" data-filter="*">All</button>
                        </li>
                        @foreach ($albums as $key => $album)
                            <li>
                                <button data-filter=".{{$album->name}}">{{$album->name}}</button>
                            </li>
                        @endforeach
                    @else
                        <li>
                            <button class="active" data-filter="*">All</button>
                        </li>
                        <li>
                            <button data-filter=".building">Building</button>
                        </li>
                    @endif

                </ul>
            </div>
            <div class="row project-items mt-xl-50 mt-30">
                {{--  <div class="col-md-6 col-xl-7 building renovate">
                    <div class="project-card wow animate__fadeInUp" data-wow-delay="0.1s" data-wow-offset="20" data-wow-duration="0.8s">
                        <img src="assets/img/our-project/v1/pro-img-1.jpg" alt="pro-img">
                        <div class="project-content">
                            <div class="content-link">
                                <h5 class="text-5 text-bold text-capital"><a href="project-details.html">Construction Factory Industry</a></h5>
                                <h6 class="text-6">Electrical . Bulling</h6>
                            </div><a href="project-details.html" class="pro-link"><i class="my-icon icon-arrow-right"></i></a>
                        </div>
                    </div>
                </div>  --}}
                @if ($albums != null)
                    @foreach($images as $key => $image)
                        @foreach ($albums as $key => $album)
                            @if ($image->album_id == $album->id)
                                <div class="col-md-6 col-xl-5 {{$album->name}}">
                                    <div class="project-card wow animate__fadeInUp" data-wow-delay="0.3s" data-wow-offset="20" data-wow-duration="0.8s">
                                        <img src="{{ static_asset('storage/' . $image->path) }}" alt="pro-img">
                                        <div class="project-content">
                                            <div class="content-link">
                                                <h5 class="text-5 text-bold text-capital"><a href="project-details.html">{{$image->name}}</a></h5>
                                                <h6 class="text-6">{{$image->name}}</h6>
                                            </div><a href="#" class="pro-link"><i class="my-icon icon-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                        {{--  <div class="col-md-6 col-xl-5 building">
                            <div class="project-card wow animate__fadeInUp" data-wow-delay="0.5s" data-wow-offset="20" data-wow-duration="0.8s">
                                <img src="assets/img/our-project/v1/pro-img-3.jpg" alt="pro-img">
                                <div class="project-content">
                                    <div class="content-link">
                                        <h5 class="text-5 text-bold text-capital"><a href="project-details.html">Construction Factory Industry</a></h5>
                                        <h6 class="text-6">Electrical . Bulling</h6>
                                    </div><a href="project-details.html" class="pro-link"><i class="my-icon icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-7 interior building">
                            <div class="project-card wow animate__fadeInUp" data-wow-delay="0.1s" data-wow-offset="20" data-wow-duration="0.8s">
                                <img src="assets/img/our-project/v1/pro-img-4.jpg" alt="pro-img">
                                <div class="project-content">
                                    <div class="content-link">
                                        <h5 class="text-5 text-bold text-capital"><a href="project-details.html">Construction Factory Industry</a></h5>
                                        <h6 class="text-6">Electrical . Bulling</h6>
                                    </div><a href="project-details.html" class="pro-link"><i class="my-icon icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>  --}}
                    @endforeach
                @endif
            </div>
        </div>
    </section>
    <!-- Latest Project End -->
</main>
@endsection
