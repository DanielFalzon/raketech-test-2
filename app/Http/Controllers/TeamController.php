<?php

namespace App\Http\Controllers;

use App\Interfaces\TeamRepositoryInterface;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;

class TeamController extends Controller
{
    private TeamRepositoryInterface $teamRepository;

    public function __construct(TeamRepositoryInterface $teamRepository)
    {
        $this->teamRepository = $teamRepository;
    }

    public function index(Request $request): JsonResponse
    {
        $request->validate([
            'leagueSlug' => 'required'
        ]);

        try{
            $leagueSlug = $request->input('leagueSlug');
            $result = $this->teamRepository->getTeamsByLeague($leagueSlug);
        }catch(Exception $ex){
            throw new HttpException(500, $ex->getMessage());
        }

        return response()->json([
            'data' => $result
        ]);
    }

}