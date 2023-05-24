<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubscriptionPlanController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\MovieController as AdminMovieController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect("/", "/login");

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function () {
    route::get('/', [DashboardController::class, 'index'])->name('index');
    route::get('/movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('checkUserSubscription:true');
    route::get('/subscription-plan', [SubscriptionPlanController::class, 'index'])->name('subscription-plan')->middleware('checkUserSubscription:false');
    route::post('/subscription-plan/{subscriptionPlan}/user-subscribe', [SubscriptionPlanController::class, 'userSubscribe'])->name('subscription-plan.user-subscribe')->middleware('checkUserSubscription:false');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function () {
    Route::resource('movie', AdminMovieController::class);
});

Route::prefix('prototype')->name('prototype.')->group(function () {
    route::get('/login', function () {
        return Inertia::render('Prototype/Login');
    })->name('login');

    route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    })->name('register');

    route::get('/dashboard', function () {
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');

    route::get('/subscription-plan', function () {
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('subscription-plan');

    route::get('/movie/{slug}', function () {
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
