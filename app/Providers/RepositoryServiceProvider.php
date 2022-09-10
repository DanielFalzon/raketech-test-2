<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories;
use App\Interfaces;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(Interfaces\SportRepositoryInterface::class, Repositories\SportRepository::class);
        $this->app->bind(Interfaces\LeagueRepositoryInterface::class, Repositories\LeagueRepository::class);
        $this->app->bind(Interfaces\TeamRepositoryInterface::class, Repositories\TeamRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
