<?php

namespace App\Http\Controllers;

use App\Interfaces\LeagueRepositoryInterface;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;

class LeagueController extends Controller
{
    private LeagueRepositoryInterface $leagueRepository;

    public function __construct(LeagueRepositoryInterface $leagueRepository)
    {
        $this->leagueRepository = $leagueRepository;
    }

    public function index(Request $request): JsonResponse
    {
        try{
            $sportSlug = $request->input('sportSlug');
            $result = $this->leagueRepository->getLeagueBySport($sportSlug);
        }catch(Exception $ex){
            throw new HttpException(500, $ex->getMessage());
        }
    
        return response()->json([
            'data' => $result
        ]);
    }

}